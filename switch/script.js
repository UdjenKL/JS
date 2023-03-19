switch (prompt("Какая сейчас погода?")) {
  case "солнечно":
  case "Солнечно":
    console.log("Возьми очки".toLowerCase());
    break;
  case "Туман":
    console.log("Ёжик в тумане");
    break;
}
