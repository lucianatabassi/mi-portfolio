import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

export const ShaderGradientComponent = () => {
  return (
    <div className="w-full h-[60vh] md:h-auto">
      <ShaderGradientCanvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Para que no bloquee el scroll/clicks si hay texto encima
          zIndex: -2, // Para asegurarse de que esté detrás de todo el contenido
        }}
      >
        <ShaderGradient
  animate="on"
  axesHelper="off"
  brightness={0.2}
  cAzimuthAngle={180}
  cDistance={2.81}
  cPolarAngle={80}
  cameraZoom={15}
  color1="#190055"
  color2="#040463"
  color3="#00000F"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="on"
  lightType="3d"
  pixelDensity={1}
  positionX={0}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={50}
  rotationY={0}
  rotationZ={-60}
  shader="defaults"
  type="waterPlane"
  uAmplitude={0}
  uDensity={1.5}
  uFrequency={0}
  uSpeed={0.2}
  uStrength={1.5}
  uTime={8}
  wireframe={false}
/>
      </ShaderGradientCanvas>
    </div>
  );
};
