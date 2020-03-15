export const assertionData = {
  setDefinition: {
    latl: `
set NASAL_PULMONIC_CONSONANTS               = [ m̥, m, ɱ, n̼, n̥, n, ɳ̊, ɳ, ɲ̊, ɲ, ŋ, ̊ŋ, ɴ ],
    STOP_PULMONIC_CONSONANTS                = [ p, b, p̪, b̪, t̼, d̼, t, d, ʈ, ɖ, c, ɟ, k, ɡ, q, ɢ, ʡ, ʔ ]`,
    tokens: [
      { type: 'whiteSpace', value: '\n' },
      { type: 'kw-set', value: 'set' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'setIdentifier', value: 'NASAL_PULMONIC_CONSONANTS' },
      { type: 'whiteSpace', value: '               ' },
      { type: 'equal', value: '=' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'openSquareBracket', value: '[' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'm̥' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'm' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɱ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n̼' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n̥' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɳ̊' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɳ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɲ̊' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɲ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ŋ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: '̊ŋ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɴ' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'closeSquareBracket', value: ']' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: '\n    ' },
      { type: 'setIdentifier', value: 'STOP_PULMONIC_CONSONANTS' },
      { type: 'whiteSpace', value: '                ' },
      { type: 'equal', value: '=' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'openSquareBracket', value: '[' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'p' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'b' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'p̪' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'b̪' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 't̼' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'd̼' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 't' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'd' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ʈ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɖ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'c' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɟ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'k' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɡ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'q' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' }, 
      { type: 'phone', value: 'ɢ' }, 
      { type: 'comma', value: ',' }, 
      { type: 'whiteSpace', value: ' ' }, 
      { type: 'phone', value: 'ʡ' }, 
      { type: 'comma', value: ',' }, 
      { type: 'whiteSpace', value: ' ' }, 
      { type: 'phone', value: 'ʔ' }, 
      { type: 'whiteSpace', value: ' ' }, 
      { type: 'closeSquareBracket', value: ']' } 
    ]
  },
  setAliasDefinition: {
    latl: `
set NASAL_PULMONIC_CONSONANTS, N            = [ m̥, m, ɱ, n̼, n̥, n, ɳ̊, ɳ, ɲ̊, ɲ, ŋ, ̊ŋ, ɴ ]`,
    tokens: [  
      { type: 'whiteSpace', value: '\n' },
      { type: 'kw-set', value: 'set' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'setIdentifier', value: 'NASAL_PULMONIC_CONSONANTS' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'setIdentifier', value: 'N' },
      { type: 'whiteSpace', value: '            ' },
      { type: 'equal', value: '=' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'openSquareBracket', value: '[' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'm̥' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'm' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɱ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n̼' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n̥' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'n' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɳ̊' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɳ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɲ̊' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɲ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ŋ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: '̊ŋ' },
      { type: 'comma', value: ',' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'phone', value: 'ɴ' },
      { type: 'whiteSpace', value: ' ' },
      { type: 'closeSquareBracket', value: ']' },
    ]
  },
  setDefinitionJoin: {
    latl: `
set CLICK_CONSONANTS  = { TENUIS_CLICK_CONSONANTS or VOICED_CLICK_CONSONANTS
                          or NASAL_CLICK_CONSONANTS or L_CLICK_CONSONANTS 
                        }`,
    tokens: [
      { type: 'whiteSpace', value: '\n'}, 
      { type: 'kw-set', value: 'set'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'setIdentifier', value: 'CLICK_CONSONANTS'}, 
      { type: 'whiteSpace', value: '  '}, 
      { type: 'equal', value: '='}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'openCurlyBracket', value: '{'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'identifier', value: 'TENUIS_CLICK_CONSONANTS'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'kw-set-or', value: 'or'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'identifier', value: 'VOICED_CLICK_CONSONANTS'}, 
      { type: 'newLine', value: '\n'}, 
      { type: 'whiteSpace', value: '                          '}, 
      { type: 'kw-set-or', value: 'or'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'identifier', value: 'NASAL_CLICK_CONSONANTS'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'kw-set-or', value: 'or'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'identifier', value: 'L_CLICK_CONSONANTS'}, 
      { type: 'whiteSpace', value: ' '}, 
      { type: 'newLine', value: '\n'}, 
      { type: 'whiteSpace', value: '                        '}, 
      { type: 'closeCurlyBracket', value: '}'}
    ]
  },
}