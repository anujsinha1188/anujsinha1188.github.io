function pointValues(point) {
    console.log({ ...point });
    const { name: n, age: a } = { ...point }
    console.log(n)
    console.log(a)
}
pointValues({ name: "jerry", age: 2 })
pointValues(undefined)