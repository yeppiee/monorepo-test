import { initApp } from './app'

async function main() {
	const { app, cfg } = await initApp()

	app.listen(cfg.port, () => {
		console.log(`Server listening on port http://localhost:${cfg.port}`)
	})
}

main().catch(console.error)