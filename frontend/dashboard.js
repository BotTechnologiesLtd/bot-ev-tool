async function saveParts() {
    const vehicleSerial = document.getElementById("vehicleSerial").value;
    const vehicleModel = document.getElementById("vehicleModel").value;
    const batteryVoltage = document.getElementById("batteryVoltage").value;
    const motorType = document.getElementById("motorType").value;

    await fetch("http://localhost:3000/diagnostics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            vehicleSerial,
            vehicleModel,
            batteryVoltage,
            motorType,
        }),
    });
}
