import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  const funcao = [
    { title: "Meu título 1", text: "Meu texto 1" },
    { title: "Meu título 2", text: "Meu texto 2" },
    { title: "Meu título 3", text: "Meu texto 3" },
    { title: "Meu título 4", text: "Meu texto 4" },
    { title: "Meu título 5", text: "Meu texto 5" },
    { title: "Meu título 6", text: "Meu texto 6" },
    { title: "Meu título 7", text: "Meu texto 7" },
    { title: "Meu título 8", text: "Meu texto 8" },
    { title: "Meu título 9", text: "Meu texto 9" },
    { title: "Meu título 10", text: "Meu texto 10" },
  ];
  return (
    <>
      {funcao.map((item, index) => (
        <MyText key= {index} title={item.title} text={item.text}></MyText>
      ))}
    </>
  );
}
