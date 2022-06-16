export async function getData() {
    const response = await fetch('https://fakestoreapi.com/products?limit=8');
    const data = await response.json();
    return data
}