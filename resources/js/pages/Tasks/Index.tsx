import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { type Task } from '@/types';
import { toast } from "sonner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function Index({ tasks }: { tasks: Task[] }) {
    const deleteTask = (id: number) => {
        if(confirm("Are you sure?")) {
            router.delete(route('tasks.destroy', { id }), {
                onSuccess: () => {
                    toast.success("Task deleted successfully.");
                },
                onError: () => {
                    toast.error("Error deleting task.");
                }
            });
        }
    };

    return (
        <AppLayout>
            <Head title="Tasks" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Tasks</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="w-[150px] text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell className="text-right">
                                    {/* Actions can be added here */}
                                    <button className="text-blue-500">Edit</button>
                                    <button className="text-red-500 ms-3" onClick={() => deleteTask(task.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
         
        </AppLayout>
    );
}
