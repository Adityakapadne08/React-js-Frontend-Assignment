function findRoute(tickets, startCity) {
    const graph = new Map();

    // the graph
    tickets.forEach(([start, end]) => {
        if (!graph.has(start)) graph.set(start, []);
        graph.get(start).push(end);
    });

    const route = [];
    
    function dfs(city) {
        const destinations = graph.get(city) || [];
        while (destinations.length) {
            dfs(destinations.shift());
        }
        route.push(city);
    }

    dfs(startCity);
    return route.reverse();
}

const tickets = [
    ["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Kiev"],
    ["Berlin", "Amsterdam"]
];

const startCity = "Kiev";
const route = findRoute(tickets, startCity);

console.log("The route is:", route.join(" -> "));
