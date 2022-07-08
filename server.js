const PORT = process.env.PORT || 3000
// export default {
//     port: PORT,
//     fetch(request) {
//         return new Response("Welcome to Bun!");
//     },
//     render(request) {
//         return new Response("Welcome to Bun!");
//     }

// };
// ]

Bun.serve({
    fetch(req) {
        // json
        return new Response(
            JSON.stringify({
                message: "Welcome to Bun!"
            })

        );
    },
});