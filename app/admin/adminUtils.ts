'use server'
import prisma from "@/prisma/client";

export interface AdminDataType{
    totalRegistrations: number;
    eventRegistrations: {id:string, name: string, count: number, regsOpen: boolean}[];
}

export const getAdminData = async () => {
    const adminData: AdminDataType = {totalRegistrations: 0, eventRegistrations: []};
    adminData.totalRegistrations = await prisma.user.count();

    adminData.eventRegistrations = (await prisma.event.findMany({
        select: {
            id: true,
            name: true,
            registrationsOpen: true,
            _count: {
                select: {
                    registrations: true
                }
            }
        }
    })).map(e => ({ id: e.id, name: e.name, count: e._count.registrations, regsOpen: e.registrationsOpen }));

    return adminData;
}

export const closeRegistration = async (eventId: string) => {
    try{
        await prisma.event.update({
            where: {
                id: eventId
            },
            data: {
                registrationsOpen: false
            }
        });
        return true;
    }catch(err){
        console.error(err);
        return false;
    }
}

export const getRegistrations = async (eventId: string) => {
    const event = await prisma.event.findFirst({
        where: {
            id: eventId
        },
        select: {
            registrations: {
                select: {
                    name: true,
                    phone: true,
                    email: true,
                    college: true,
                    department: true,
                    year: true
                }
            }
        }
    });
    return event?.registrations;
}