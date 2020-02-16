import { stateReducer } from './reducer';
import { initState } from './reducer.init';
import { decomposeRules, transformLexeme } from './reducer.results';

describe('Results', () => {
  let state = {};
  beforeEach(()=> {
    state = {};
  })

  it('results returned unaltered', () => {
    const action = {type: ''};
    expect(stateReducer(state, action)).toBe(state);
  });

  it('rules decomposed properly', () => {
    const epoch = initState().epochs[0];
    epoch.changes = epoch.changes.slice(0,1)
    const phones = initState().phones;
    const result = [
      {
        // ! '[+ occlusive - nasal]>[+ occlusive nasal]/n_',
        environment: {
          pre: [
            {
              sonorant: true, nasal: true, occlusive: true, coronal: true
            }
          ],
          position: [
            {occlusive: true, nasal: false}
          ],
          post: [],
        },
        newFeatures: [{occlusive: true, nasal: true}]
      }
    ];
    expect(decomposeRules(epoch, phones)).toStrictEqual(result);
  });

  it('expect transform lexeme to apply rule to lexeme', () => {
    const lexemeBundle = [
      {
        grapheme: 'a',
        features: {
          sonorant: true,
          back: true,
          low: true,
          high: false,
          rounded: false
        }
      },
      {
        grapheme: 'n',
        features: { sonorant: true, nasal: true, occlusive: true, coronal: true }
      },
      {
        grapheme: 't',
        features: { occlusive: true, coronal: true, obstruent: true }
      },
      {
        grapheme: 'a',
        features: {
          sonorant: true,
          back: true,
          low: true,
          high: false,
          rounded: false
        }
      }
    ]

    const resultsLexeme = [...lexemeBundle]
    resultsLexeme[2] = lexemeBundle[1]
    
    const rule = {
      environment: { 
        pre: [ { sonorant: true, nasal: true, occlusive: true, coronal: true } ],
        position: [ { occlusive: true, nasal: false } ],
        post: [] 
      },
      newFeatures: [ { occlusive: true, nasal: true } ]
    }

    expect(transformLexeme(lexemeBundle, rule, initState().features)).toEqual(resultsLexeme)

  })


  it('results returned from first sound change rule', () => {
    const action = {type: 'RUN'};
    state = initState(0)
    expect(stateReducer(state, action).results).toEqual({
      pass: 'epoch 1',
      results: [
        'anna', 'anat', 'anət', 'anna', 'tan', 'ənna'
      ]
    })
  });

});