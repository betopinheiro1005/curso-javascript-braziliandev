/* escopo em funções aninhadas */

let nivelGlobal = 'Nível global'
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined

function funcaoNivel1() {
  let nivel1 = 'Nível 1'

  function funcaoNivel2(){
    let nivel2 = 'Nível 2'

    function funcaoNivel3(){
      let nivel3 = 'Nível 3'
      console.log(`\nFunção nível 3 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3}` )
    }
    funcaoNivel3()
    console.log(`\nFunção nível 2 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3 : 'Nível inacessível'}`)
  }
  funcaoNivel2()
     console.log(`\nFunção nível 1 resultados: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel2 : 'nível inacessível'} \n${nivel3 ? nivel3 : 'Nível inacessível'}`)
}

funcaoNivel1()
