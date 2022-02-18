
interface dataType {
    data: {
        avatar: string,
        email: string,
        first_name: string,
        id: number,
        last_name: string,
    }[],
}
interface userType {
    user: {
        avatar: string,
        email: string,
        first_name: string,
        id: number,
        last_name: string,
    }
}

export const deleteUser = (data: dataType, user: userType) => {
    const newData = data?.filter((item: any) => item?.id != user?.id)
    return newData
}

export const updateUser = (data: dataType, user: userType) => {
    const index = data?.findIndex((item: any) => item?.id === user?.id)
    return [...data?.slice(0, index), user, ...data?.slice(index + 1)]
}
