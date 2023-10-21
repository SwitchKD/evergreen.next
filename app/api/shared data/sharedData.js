let sharedRequestData = null;

export function setSharedRequestData(data) {
    sharedRequestData = data;
}

export function getSharedRequestData() {
    return sharedRequestData;
}