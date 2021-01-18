<script>
	import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Projects from "./pages/Projects.svelte";
    export let url = "";
</script>

<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="projects">Projects</Link>
	</nav>
	<div>
		<Route path="projects" component="{Projects}" /> 
		<Route path="/"><Home /></Route>
	</div>
</Router>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: grey;
	}
</style>