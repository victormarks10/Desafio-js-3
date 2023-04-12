//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
// A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; -
// O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!


const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 4,
        salary: 1500
    },
    {
        numberOfChildren: 7,
        salary: 1200
    },
    {
        numberOfChildren: 3,
        salary: 1800
    },
    {
        numberOfChildren: 2,
        salary: 3000
    },
    {
        numberOfChildren: 4,
        salary: 2100
    },
    {
        numberOfChildren: 0,
        salary: -400
    },


]
function findAverageAndHighestSalary(peopleInformation) {


    let averageSalary = 0  //salario medio
    let averageChildren = 0 // media de filhos
    let highestSalary = 0 // maior salario


    for (let i = 0; i < peopleInformation.lenght; i++) { // somar o i a cada passada

        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren
        
        console.log(salary/peopleInformation.lenght)
        console.log(children/peopleInformation.lenght)

        if (salary > highestSalary) highestSalary = salary

        if(salary<0) {
            console.log(`Média de salário R$${(averageSalary/i+1).toFixed}`)
            console.log( `Média dos filhos R$${(averageSalary/i+1).toFixed}`)
            console.log( `Maior salario R$${highestSalary}`) }
            else{
                averageSalary = averageSalary+salary;
                averageChildren +=children
            
            }
        

    }
    findAverageAndHighestSalary()
}


