import Spline from '@splinetool/react-spline';

export function Scene3D() {
  return (
    <div className="w-full h-full relative">
      <Spline 
        scene="https://prod.spline.design/Q2HTz3sKq2ujDk8B/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          top: 0, 
          left: 0,
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
