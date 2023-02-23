import { serviceService } from "../services/serviceService";

export const serviceHandler = {
    addService(newService){
        if (!newService) {
            return;
        }

        let newServiceStructure = {
            "img": newService.img,
            "subtitle": newService.subtitle,
            "categoria": newService.categoria,
            "cobro": newService.cobro,
        }

        return serviceService.submitService(newServiceStructure);
        
    },
    loadServices(){
        return serviceService.getServices();
    },
    loadServices(id) {
        return serviceService.getServices(id);
    },
    deleteService(id){
        return serviceService.deleteService(id);
    },
    updateService(newService){
        return serviceService.newService(newService);
    }
   
}