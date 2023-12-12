import { LSystemRule } from "./rule";

export class LSystemEvaluator {

    constructor(
        private rules: LSystemRule[]
    ) {}

    getIteration(iteration: number): string {
        if(iteration < 0) {
            return ''
        }
        //todo
        const rule = this.rules[0]
        const ruleVar = rule.name.toLowerCase()
        const rulePattern = rule.pattern.toLocaleLowerCase()
        let result = rulePattern
        for (let i = 0; i < iteration; i++) {
            result = result.replaceAll(ruleVar, rulePattern)
            console.log('coucou',rule, ruleVar, rulePattern, result)
        }

        return result
    }
}