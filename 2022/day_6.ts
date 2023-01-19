const getMarker = (data, markerLength: number) => {
    for (let i = 0; i < data.length - markerLength; i++) {
        const slicedString = data.slice(i, i + markerLength)
        const counter = new Set(slicedString).size
        if (counter === markerLength) {
            return i + markerLength
        }
    }
};

export const getPacketMarker = (data) => {
    const PACKET_MARKER_LENGTH = 4;
    return getMarker(data, PACKET_MARKER_LENGTH)
}

export const getMessageMarker = (data) => {
    const MESSAGE_MARKER_LENGTH = 14;
    return getMarker(data, MESSAGE_MARKER_LENGTH);
}