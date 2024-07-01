import { BiAlignJustify, BiBold, BiFontFamily, BiFontSize, BiItalic, BiText, BiUnderline } from "react-icons/bi";


const Nav = [
    {
      statement: "used to bold",
      icon: <BiBold />,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          text.style.fontWeight = "700";
        }
        else{
          text.style.fontWeight = "";
        }
      },
    },
    {
      statement: "used to italic",
      icon: <BiItalic />,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          text.style.fontStyle = "italic";
        }
        else{
          text.style.fontStyle = "";
        }
      },
    },
    {
      statement: "used to underline",
      icon: <BiUnderline />,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          text.style.textDecorationLine = "underline";
        }
        else{
          text.style.textDecorationLine = "";
        }
      },
    },
    {
      statement: "change fontsize ",
      icon: <BiFontSize />,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          text.style.fontSize = `${Math.floor(Math.random()*60)}px`;
        }
        else{
          text.style.fontSize = "";
        }
      },
    },
    {
      statement: "change fontfamily ",
      icon: <BiFontFamily className=" h-full"/>,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          const fonts:string[] = [
            "monospace",
            "sans-serif",
            "serif",
            "cursiv",
            "fantasy",
            "verdana"
          ]
          text.style.fontFamily = `${fonts[Math.floor(Math.random()*5)]}`;
        }
        else{
          text.style.fontFamily = "";
        }
      },
    },
    {
      statement: "change TextTransform ",
      icon: <BiText/>,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          const fonts:string[] = [
            "uppercase",
            "capitalize",
            "lowercase",
          ]
          text.style.textTransform = `${fonts[Math.floor(Math.random()*2)]}`;
        }
        else{
          text.style.textTransform = "";
        }
      },
    },
    {
      statement: "Clear Format ",
      icon: <FaRemoveFormat/>,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          text.style.textTransform = "";
          text.style.fontSize = "";
          text.style.textDecoration = "none";
          text.style.fontWeight = "";
          text.style.fontFamily ="";
        }
      },
    },
    {
      statement: "change Alighnment ",
      icon: <BiAlignJustify/>,
      handlers: (click: boolean) => {
        const text = document.getElementById("text")!;
        const val = text?.innerText;
        if (click) {
          const align:number[] = [
            0,24,50
          ]
          text.style.left = `${align[Math.floor(Math.random()*3)]}%`;
        }
        else{
          text.style.right = "";
        }
      },
    },
  ];