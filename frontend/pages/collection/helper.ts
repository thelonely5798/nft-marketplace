


import _ from "lodash"
export enum Status  {
    IS_LISTED="IS_LISTED",
    ON_AUCTION="ON_AUCTION",
    IS_NEW="IS_NEW",
    HAS_OFFERS="HAS_OFFERS"
}

export interface Options  {
    toggles: Array<Status>
}
export const useSearh = () => {
    const options = ref<Options>({toggles: []})

    const addStatus = (status: Status) => {
        if(options.value.toggles.includes(status)) {
            options.value.toggles = _.filter(options.value.toggles, (c)=> c !== status)
            return
        }
        options.value.toggles = [...options.value.toggles, status]
    }

    const getOptions = () => {
        let _options: any = {}
        if(options.value.toggles.length > 0) {
            _options["toggles"] = options.value.toggles
        }
        return _options
    }
    return {options, getOptions, addStatus}
}