//More profitable operation

(function () {

    const carPrices = `40000(2022-01-01),40100(2022-01-02),40300(2022-01-03),40500(2022-01-04),40400(2022-01-05),40450(2022-01-06),40900(2022-01-06)`

    let splitedPrices = carPrices.replace(' ', '').split(',')

    const splitPricesJson = splitedPrices.map((price) => {
        price = price.replace(')', '').split('(')
        return {
            price: parseFloat(price[0]),
            date: price[1]
        }
    })

    const bestPurshaseDate = splitPricesJson.reduce((prev, current) => {
        return prev.price < current.price ? prev : current;
    })

    const bestSaleDate = splitPricesJson.reduce((prev, current) => {
        return prev.price > current.price ? prev : current;
    })

    console.log({
        bestPurshaseDate,
        bestSaleDate,
        profit: parseFloat(bestSaleDate.price) - parseFloat(bestPurshaseDate.price)
    })
})();