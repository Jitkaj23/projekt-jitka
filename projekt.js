class Person {
	constructor(jmeno, prijmeni, vek, telefon) {
		this.jmeno = jmeno
		this.prijmeni = prijmeni
		this.vek = vek
		this.telefon = telefon
	}
	getName() {
        return this.jmeno + " " + this.prijmeni
	}
	getAge() {
        return this.vek
	}
	getTel() {
        return this.telefon
	}
}

function update() {
    let person = addPerson()
    printPerson(person)
}

function addPerson() {
    let jmeno = document.getElementById("jmeno").value
    document.getElementById("jmeno").value = ""
    let prijmeni = document.getElementById("prijmeni").value
    document.getElementById("prijmeni").value = ""
    let vek = document.getElementById("vek").value
    document.getElementById("vek").value = ""
    let telefon = document.getElementById("telefon").value
    document.getElementById("telefon").value = ""

    let person = new Person(jmeno, prijmeni, vek, telefon)
    return person
}

function printPerson(person) {
    let table = document.getElementById("vystup");
    let row = table.insertRow(-1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = person.getName();
    cell2.innerHTML = person.getTel(); 
    cell3.innerHTML = person.getAge(); 
}
