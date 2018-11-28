
export class Task {

    nametask: string;
    descriptiontask: string;
    datetask: Date;

    constructor(name: string, description: string, hora: string, fecha: string) {
        this.nametask = name;
        this.descriptiontask = description;
        this.datetask = this.getFormatDate(hora, fecha);
    }

    getFormatDate(hora: string, fecha: string): Date {
    const sFecha = fecha.split('-');
    const sHora = hora.split(':');
    return new Date(parseFloat(sFecha[0]), parseFloat(sFecha[1]) - 1 ,
    parseFloat(sFecha[2]), parseFloat(sHora[0]) , parseFloat(sHora[1]));
    }
}
