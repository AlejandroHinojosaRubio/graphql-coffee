
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CoffeeType {
    ARABICA = "ARABICA",
    ROBUSTA = "ROBUSTA"
}

export class CreateCoffeeInput {
    name: string;
    brand: string;
    flavors: string[];
    type?: Nullable<CoffeeType>;
}

export class UpdateCoffeeInput {
    name?: Nullable<string>;
    brand?: Nullable<string>;
    flavors: string[];
    type?: Nullable<CoffeeType>;
}

export class CreateTeaInput {
    name: string;
    brand: string;
}

export class UpdateTeaInput {
    name: string;
    brand: string;
}

export interface Drink {
    name: string;
}

export class Tea implements Drink {
    id: number;
    name: string;
    brand: string;
    createdAt?: Nullable<Date>;
}

export class Coffee implements Drink {
    id: number;
    name: string;
    brand: string;
    flavors?: Nullable<Flavor[]>;
    createdAt?: Nullable<Date>;
    type?: Nullable<CoffeeType>;
}

export class Flavor {
    id: number;
    name: string;
}

export abstract class IQuery {
    coffees: Coffee[];
    coffee?: Coffee;
    teas: Tea[];
    tea?: Tea;
    drinks: DrinksResultUnion[];
}

export abstract class IMutation {
    createCoffee?: Coffee;
    updateCoffee?: Coffee;
    removeCoffee?: Coffee;
    createTea?: Tea;
    updateTea?: Tea;
    removeTea?: Tea;
}

export abstract class ISubscription {
    coffeeAdded: Coffee;
}

export type DrinksResultUnion = Coffee | Tea;
type Nullable<T> = T | null;
