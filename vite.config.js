import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default ({mode}) => {
  console.log(mode);
  console.log(loadEnv(mode, process.cwd()));
  process.env = {...process.env, ...loadEnv("mock", process.cwd(), "custom_env")};

  return defineConfig({
    plugins: [vue()],
    server: {
      port: 3000,
      cors: true
    }
  })
}
