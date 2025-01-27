<script lang="ts">
	import { onMount } from 'svelte';
	import { loadFull } from "tsparticles";
	import type { Engine } from "tsparticles-engine";
	import Particles from "svelte-particles";

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};

	const particlesConfig = {
		particles: {
			number: { value: 40, density: { enable: true, value_area: 800 } },
			color: { value: "#0c8de4" },
			shape: { type: "circle" },
			opacity: { value: 0.5, random: true },
			size: { value: 3, random: true },
			line_linked: {
				enable: true,
				distance: 150,
				color: "#0c8de4",
				opacity: 0.2,
				width: 1
			},
			move: {
				enable: true,
				speed: 2,
				direction: "none",
				random: true,
				straight: false,
				out_mode: "out",
				bounce: false
			}
		},
		interactivity: {
			detect_on: "window",
			events: {
				onhover: { enable: true, mode: "grab" },
				onclick: { enable: true, mode: "push" },
				resize: true
			}
		},
		retina_detect: true
	};
</script>

<svelte:head>
	<title>AlterEgo - Your Digital Twin on Solana</title>
</svelte:head>

<!-- Hero Section -->
<div class="relative overflow-hidden">
	<Particles
		id="tsparticles"
		options={particlesConfig}
		particlesInit={particlesInit}
		class="absolute inset-0 -z-10"
	/>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
		<h1 class="text-5xl md:text-6xl font-display font-bold mb-6">
			<span class="gradient-text">Create Your Digital Twin</span>
			<br />
			on the Solana Blockchain
		</h1>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
			Train, deploy, and monetize your AI clone. Let it handle tasks while you focus on what matters most.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/demo" class="button-primary">Try Demo</a>
			<a href="/docs" class="button-secondary">Documentation</a>
		</div>
	</div>
</div>

<!-- Features Section -->
<section id="features" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-display font-bold text-center mb-12">
			<span class="gradient-text">Features</span>
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each [
				{
					title: 'Behavioral Training',
					description: 'Train your AI clone with your communication style, decision-making patterns, and preferences.'
				},
				{
					title: 'Smart Contracts',
					description: "Secure your AI clone's operations with tamper-proof smart contracts on Solana."
				},
				{
					title: 'Monetization',
					description: 'Earn passive income by letting your AI clone work in the decentralized marketplace.'
				}
			] as feature}
				<div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
					<h3 class="text-xl font-display font-bold mb-4">{feature.title}</h3>
					<p class="text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- How It Works -->
<section id="how-it-works" class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-display font-bold text-center mb-12">
			<span class="gradient-text">How It Works</span>
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each [
				{
					step: '01',
					title: 'Connect Wallet',
					description: 'Link your Solana wallet to get started.'
				},
				{
					step: '02',
					title: 'Train Your Clone',
					description: 'Upload data to teach your AI your behavior.'
				},
				{
					step: '03',
					title: 'Set Permissions',
					description: 'Define what your AI can and cannot do.'
				},
				{
					step: '04',
					title: 'Deploy & Earn',
					description: 'Let your AI work and earn tokens.'
				}
			] as { step, title, description }}
				<div class="relative">
					<div class="text-4xl font-display font-bold text-primary-100 mb-4">{step}</div>
					<h3 class="text-xl font-display font-bold mb-2">{title}</h3>
					<p class="text-gray-600">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl font-display font-bold text-center mb-12">
			<span class="gradient-text">FAQ</span>
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
			{#each [
				{
					question: 'Is my data secure?',
					answer: 'Yes! All sensitive data is encrypted, and only hashes are stored on the blockchain.'
				},
				{
					question: 'How much does it cost?',
					answer: 'Creating an AlterEgo costs a small amount of SOL for minting and transaction fees.'
				},
				{
					question: 'Can I delete my AlterEgo?',
					answer: 'Yes, you can burn your AlterEgo NFT to permanently delete your AI clone.'
				},
				{
					question: 'Can I have multiple AlterEgos?',
					answer: 'Absolutely! Create multiple AI clones for different purposes.'
				}
			] as { question, answer }}
				<div class="bg-white p-6 rounded-xl">
					<h3 class="text-lg font-display font-bold mb-2">{question}</h3>
					<p class="text-gray-600">{answer}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Replace the waitlist section with Demo & Docs -->
<section id="demo-docs" class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-4xl font-display font-bold mb-6">
			<span class="gradient-text">Get Started</span>
		</h2>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
			Experience AlterEgo firsthand or dive deep into our documentation to learn more.
		</p>
		<div class="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
			<a href="/demo" class="button-primary flex-1 text-center">
				Try Demo
			</a>
			<a href="/docs" class="button-secondary flex-1 text-center">
				Documentation
			</a>
		</div>
	</div>
</section>
