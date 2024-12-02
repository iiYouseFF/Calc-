const Path = window.location.pathname;
const HomeBtn = document.getElementById("Home");
const CalcBtn = document.getElementById("Calc");
const UCBtn = document.getElementById("UC");
const RandomBtn = document.getElementById("Random");

console.log(Path);

const home = Path.match(/Home/);
const Calculator = Path.match(/Calculator/);
const UnitConverter = Path.match(/Unit/);
const Random = Path.match(/Random/);
console.log(home);
console.log(Calculator);
console.log(UnitConverter);
console.log(Random);

if (home != null) {
    HomeBtn.classList.remove("normal")    
    HomeBtn.classList.add("Active")
    CalcBtn.classList.remove("Active")
    CalcBtn.classList.add("normal")
    UCBtn.classList.remove("Active")
    UCBtn.classList.add("normal")
    RandomBtn.classList.remove("Active")
    RandomBtn.classList.add("normal")
}
if(Calculator != null){
    HomeBtn.classList.add("normal")
    HomeBtn.classList.remove("Active")
    CalcBtn.classList.add("Active")
    CalcBtn.classList.remove("normal")
    UCBtn.classList.remove("Active")
    UCBtn.classList.add("normal")
    RandomBtn.classList.remove("Active")
    RandomBtn.classList.add("normal")

}
if(UnitConverter != null){
    HomeBtn.classList.remove("Active")
    HomeBtn.classList.add("normal")
    CalcBtn.classList.remove("Active")
    CalcBtn.classList.add("normal")
    UCBtn.classList.remove("normal")
    UCBtn.classList.add("Active")
    RandomBtn.classList.remove("Active")
    RandomBtn.classList.add("normal")
}
if(Random != null){
    HomeBtn.classList.remove("Active")
    HomeBtn.classList.add("normal")
    CalcBtn.classList.remove("Active")
    CalcBtn.classList.add("normal")
    UCBtn.classList.remove("Active")
    UCBtn.classList.add("normal")
    RandomBtn.classList.remove("normal")
    RandomBtn.classList.add("Active")
}
