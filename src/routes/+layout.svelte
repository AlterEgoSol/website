<!-- src/routes/+layout.svelte -->
<script>
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<header class="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
		<nav class="max-w-7xl mx-auto flex items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="text-2xl font-display font-bold gradient-text">AlterEgo</a>
			</div>
			<div class="hidden md:flex items-center space-x-8">
				<a href="#features" class="text-gray-600 hover:text-primary-600">Features</a>
				<a href="#how-it-works" class="text-gray-600 hover:text-primary-600">How it Works</a>
				<a href="#faq" class="text-gray-600 hover:text-primary-600">FAQ</a>
			</div>
			<div>
				<a href="#waitlist" class="button-primary">Join Waitlist</a>
			</div>
		</nav>
	</header>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-display font-bold gradient-text mb-4">AlterEgo</h3>
					<p class="text-gray-600">Create, configure, and deploy your AI clone on Solana.</p>
				</div>
				<div>
					<h4 class="font-medium text-gray-900 mb-4">Quick Links</h4>
					<ul class="space-y-2">
						<li><a href="#features" class="text-gray-600 hover:text-primary-600">Features</a></li>
						<li><a href="#how-it-works" class="text-gray-600 hover:text-primary-600">How it Works</a></li>
						<li><a href="#faq" class="text-gray-600 hover:text-primary-600">FAQ</a></li>
					</ul>
				</div>
				<div>
					<h4 class="font-medium text-gray-900 mb-4">Connect</h4>
					<ul class="space-y-2">
						<li><a href="https://twitter.com" class="text-gray-600 hover:text-primary-600">Twitter</a></li>
						<li><a href="https://discord.gg" class="text-gray-600 hover:text-primary-600">Discord</a></li>
						<li><a href="https://github.com" class="text-gray-600 hover:text-primary-600">GitHub</a></li>
					</ul>
				</div>
			</div>
			<div class="mt-12 pt-8 border-t border-gray-200 text-center">
				<p class="text-gray-600">© 2024 AlterEgo. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div> 