type Align = "left" | "right" | "center";

function alignText(s: string, alignment: Align): string {
  if (alignment === "left") {
    return s + "....";
  }
  if (alignment === "right") {
    return "...." + s;
  } else {
    return ".." + s + "..";
  }
}

type OnlyTrue = true;

function aBoolean(): boolean {
  return true;
}

const t: OnlyTrue = aBoolean();
