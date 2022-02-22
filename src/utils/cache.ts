import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = "cache"
const expiryInMinutes = 10

const store = async (key: string, value: any) => {
    try {
        const item = {
            value,
            timeStamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error)
    }
}

const isExpired = (item: any) => {
    const now = moment(Date.now())
    const storedTime = moment(item.timeStamp)
    return now.diff(storedTime, "minutes") > expiryInMinutes
}

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key)
        const item = JSON.parse(value as any)

        if (!item) return null

        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key)
            return null
        }

        return item.value

    } catch (error) {
        console.log(error)
    }
}

export default {
    store,
    get
}