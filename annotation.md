# When to use type annotation?

```typescript
// type annotation in function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

## 1. Function returns 'any' type

```typescript

const json = '{"x": 10, "y": 20}'
const coordinate = JSON.parse(json)
console.log(coordinate) // {x: 10, y: 20}
}
```

To fix it

```typescript

const json = '{"x": 10, "y": 20}'
const coordinate: {x: number; y: number} = JSON.parse(json)
console.log(coordinate) // {x: 10, y: 20}
}
```

`any` type:
. means TS has no idea what this is - cant check for correct property references
. `avoid vars with any type as all cost`

## 2. Delayed Initialization

When you declare a varible and initialize it later

in the follow ex: if the program found the word `green`, `foundWord` will be true

```typescript
let words = ['red', 'green', 'blue'];
let findWord = false;
```

### 3. When inference doesn't work

Vars that can't be inferred correctly

```typescript

let numbers = [-10, -1, 12]
let numberAbove = boolean | number = false
```

# Function type annotation

```typescript
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
```

# Destructuring wjtb annotation

```typescript
const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  log.info(forecast.date);
  log.info(forecast.weather);
};

// destructuring the func above
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {};
```
