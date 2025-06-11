import { initApp } from './app'

async function main() {
	const { app, cfg } = await initApp()

	app.listen(cfg.port, () => {
		console.log(`logger listening on port ${cfg.port}`)
	})
}

main().catch(console.error)