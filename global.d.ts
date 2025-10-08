/// <reference types="@react-three/fiber" />

// Arquivo de inclusão para garantir que as declarações de @react-three/fiber
// sejam carregadas pelo TypeScript durante a checagem.
// Se ainda houver problemas, podemos adicionar um fallback explícito aqui.

import '@react-three/fiber';

declare global {
	namespace JSX {
		// Fallback: declara `group` (e.g. outros elementos do three/fiber podem ser adicionados conforme necessário)
		interface IntrinsicElements {
			group: any;
		}
	}
}

export {};

// Também augmenta o módulo 'react' para casos em que o TS espera JSX definido por React
declare module 'react' {
	namespace JSX {
		interface IntrinsicElements {
			group: any;
		}
	}
}
