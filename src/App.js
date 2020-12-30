import React, { useRef, useEffect, useState } from "react";
import config from "./components/config";
import Colors from "./components/Colors";
import Canvas from "./components/Canvas";
import UndoButton from "./components/UndoButton";
import AddImage from "./components/AddImage";
import Gallery from "./components/Gallery";
//import { ArtsProvider } from "./Context";
import { ArtsContext } from "./Context";

// utils
import { undo } from "./components/handleUndo";
import IncreaseBrush from "./components/IncreaseBrush";
import DecreaseBrush from "./components/DecreaseBrush";
import BrushText from "./components/BrushText";

function App() {
  //refs
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  //context
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/`, {
      headers: new Headers({
        Authorization: "Bearer b670ad9e-011b-4b6c-ad9d-b857cfb108eb",
      }),
    })
      .then((ArtsRes) => {
        console.log("There was an attempt");

        if (!ArtsRes.ok) {
          return ArtsRes.json().then((e) => Promise.reject(e));
        }

        return ArtsRes.json();
      })
      .then((arts) => setArts(arts))
      .catch((error) => console.log(error));
  }, []);

  // brush states
  const [color, setColor] = useState("#000000");
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(5);

  // ctrl + z states
  const [path, setPath] = useState([]);
  const [lastPath, setLastPath] = useState([]);


  // useEffect(() => {
  //   Promise.all([
  //     fetch(`${config.API_ENDPOINT}/`, {headers: new Headers({'Authorization': 'Bearer b670ad9e-011b-4b6c-ad9d-b857cfb108eb'})})
  //   ])
  //     .then(([ArtsRes]) => {
  //       console.log("There was an attempt")

  //       if (!ArtsRes.ok)
  //         return ArtsRes.json().then(e => Promise.reject(e))

  //       return Promise.all([
  //         ArtsRes.json(),
  //       ])
  //     })
  //     .then(([arts]) => {
  //       setArts([...arts])
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 250;
    canvas.height = 250;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.lineJoin = "round";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    contextRef.current = ctx;
  }, []);

  // const getTouchPos = (canvasDom, touchEvent) => {
  //   var rect = canvasDom.getBoundingClientRect();
  //   return {
  //     posx: touchEvent.touches[0].clientX - rect.left,
  //     posy: touchEvent.touches[0].clientY - rect.top,
  //   };
  // };

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const ctx = contextRef.current;

    // get paths
    setIsDrawing(true);
    setPath([
      ...path,
      { x: offsetX, y: offsetY, color: color, brushSize: brushSize },
    ]);
    setLastPath([
      { x: offsetX, y: offsetY, color: color, brushSize: brushSize },
    ]);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const endDrawingBoth = () => {
    setIsDrawing(false);
    setPath([...path, false]);
    contextRef.current.closePath();
  };

  const draw = ({ nativeEvent }) => {
    const canvas = canvasRef.current;
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    if (
      offsetX > canvas.width - 6 ||
      offsetY > canvas.height - 6 ||
      offsetX < 6 ||
      offsetY < 6
    ) {
      setIsDrawing(false);
      // get paths
      setPath([...path, false]);
      contextRef.current.closePath();
      return;
    }
    // get paths
    setLastPath([
      ...lastPath,
      { x: offsetX, y: offsetY, color: color, brushSize: brushSize },
    ]);
    setPath([
      ...path,
      { x: offsetX, y: offsetY, color: color, brushSize: brushSize },
    ]);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <ArtsContext.Provider value={[arts, setArts]}>
      <div>
        <h1>Drawing App </h1>
        <Canvas
          startDrawing={startDrawing}
          draw={draw}
          endDrawing={endDrawingBoth}
          canvasRef={canvasRef}
        />
        <div>
          <Colors color={color} setColor={setColor} context={contextRef} />
          <UndoButton
            action={() =>
              undo(
                path,
                setPath,
                lastPath,
                setLastPath,
                canvasRef.current,
                contextRef.current
              )
            }
            enabling={lastPath.length}
          />
          <BrushText brushSize={brushSize} />
          <IncreaseBrush brushSize={brushSize} setBrushSize={setBrushSize} />
          <DecreaseBrush brushSize={brushSize} setBrushSize={setBrushSize} />
        </div>
        <div>
          <AddImage canvas={canvasRef} color={color} ctx={contextRef} />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </ArtsContext.Provider>
  );
}

export default App;
