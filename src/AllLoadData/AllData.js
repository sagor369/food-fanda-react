const loadData = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => console.log(data))
    
    return data
}
export default loadData