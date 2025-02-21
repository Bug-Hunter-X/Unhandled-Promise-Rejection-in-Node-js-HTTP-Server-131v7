# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js servers: improper handling of asynchronous operation failures.  The server includes an asynchronous operation that may fail.  The initial implementation lacks error handling, causing the server to silently fail without sending a response to the client. The solution demonstrates the correct approach to handling such errors.

## Bug

The `bug.js` file contains a Node.js HTTP server that simulates an asynchronous operation. If the operation fails, the error is logged to the console but not handled gracefully. This leads to an unhandled promise rejection and no response being sent back to the client, causing a poor user experience.

## Solution

The `bugSolution.js` file provides a corrected implementation that uses a `catch` block to properly handle the rejection of the Promise.  It ensures that the client receives a relevant error response even if the asynchronous operation fails, improving the robustness and reliability of the server.