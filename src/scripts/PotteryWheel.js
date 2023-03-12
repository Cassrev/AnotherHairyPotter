/* ALGORITHM:
1.) Define and export a function named makePottery

2.) The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
Shape of the piece of pottery (e.g. "Mug", "Platter")
Weight of the piece (e.g. 1, 5)
Height of the piece (e.g. 3, 7)

3.) The makePottery function must return an object with the following properties on it.
shape
weight
height
id (increment this value each time the function is invoked)

*/

const potteryInv = 
    [
        {
        shape: "Mug",
        weight: 505,
        height: 80,
        id: 1
        },
        {
        shape: "Platter",
        weight: 55,
        height: 40,
        id: 2
        },
        {
        shape: "Cup",
        weight: 15,
        height: 350,
        id: 3
        }

    ]

export const makePottery = (shape, weight, height) => {
    const potteryArray = []
    
        for(const pottery of potteryInv) 
        {
            potteryArray.push(pottery)
        }

    return potteryArray
}