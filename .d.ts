import '@react-three/fiber';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // fallback genérico — prefira as opções anteriores
      group: any;
    }
  }
}