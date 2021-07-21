# Why do we care?

TS can do type inference when extract values from an array
TS can prevent us from adding imcompatible values to an array
we can use `map()`, `forEach()`, `reduce()` funcs
Flexible, it still can contain multiple different types

## flexible types

```typescript
const importantDates: (string | Date)[] = [];
```

## when to use typed array

Anytime we need to represent a collection of records with some arbitrary sort order
