export async function getData() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => {controller.abort()}, 15000)
        const response = await fetch('https://fakestoreapi.com/products?limit=8', {signal: controller.signal});
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function getAllProducts() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000)
        const response = await fetch('https://fakestoreapi.com/products', {signal: controller.signal});
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);   
    }
}