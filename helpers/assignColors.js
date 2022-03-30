const standardModeColors = {
  dark: "white",
  light: "black"
}

const primaryColor = {

  Brand : "#FF3567",
  Purple : "#7A73FC",
  Yellow: "#FCC02A",
  Blue : "#1586F6",
  Green: "#12AC12",
  Orange: "#F8981D",
  Red: "#F54A4A",
  Cyan: "#1BBDD4",
  Brown: "#7A5648",
  Grey: "#93979F",
  Black: "#000000",
  White: "#FFFFFF"

};

const secondaryColor = {

  Brand : "rgba(255, 155, 180, 0.15)",
  Purple : "rgba(172, 107, 173, 0.15)",
  Yellow: "rgba(249, 237, 55, 0.15)",
  Blue : "rgba(71, 142, 204, 0.15)",
  Green: "rgba(138, 196, 75, 0.15)",
  Orange: "rgba(248, 152, 29, 0.15)",
  Red: "rgba(240, 68, 56, 0.15)",
  Cyan: "rgba(27, 189, 212, 0.15)",
  Brown: "rgba(122, 86, 72, 0.15)",
  Grey: "rgba(135, 146, 161, 0.15)",
  Black: "rgba(0, 0, 0, 0.5)",
  White: "rgba(255, 255, 255, 0.25)"
  
};

export const assignColors = () => {

  const currentStandardMode = standardModeColors[process.env.NEXT_PUBLIC_STANDARD_MODE.replaceAll('"',"")] ?? "white";
  const currentPrimaryColor = primaryColor[process.env.NEXT_PUBLIC_PRIMARY_COLOR.replaceAll('"',"")] ?? (process.env.NEXT_PUBLIC_PRIMARY_COLOR != "" ? process.env.NEXT_PUBLIC_PRIMARY_COLOR : "white");
  const currentSecondaryColor = secondaryColor[process.env.NEXT_PUBLIC_SECONDARY_COLOR.replaceAll('"',"")] ?? (process.env.NEXT_PUBLIC_SECONDARY_COLOR != "" ? process.env.NEXT_PUBLIC_SECONDARY_COLOR : "rgba(255, 255, 255, 0.25)");

  document.documentElement.style.setProperty('--standard-mode', currentStandardMode );
  document.documentElement.style.setProperty('--color-primary', currentPrimaryColor );
  document.documentElement.style.setProperty('--color-secondary', currentSecondaryColor );

}

