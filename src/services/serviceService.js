import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const serviceService = {
    async getServices() {
        let response = await apiClient.get("/services");
        let allServices = response.data;
        return allServices;
    },
    async getServices(id) {
        let response = await apiClient.get("services/" + id);
        let service = response.data;
        return service;
    },
    async submitService(newService){
        await apiClient.post("/services", newService)
    },
    async deleteService(id){
        await apiClient.delete("services/" + id)
    },
    async updateService(id, updatedService){
        await apiClient.patch("/services/" + id, updatedService)
    }
}