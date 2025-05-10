// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
  //   plugins: [
    //     tailwindcss(),
    //   ],
    // })

    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite';

    export default defineConfig({
      plugins: [
        tailwindcss(),
        react(),
      ],
    });
