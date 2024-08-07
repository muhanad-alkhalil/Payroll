import { toast } from 'react-toastify';

class toastService {
    success(message: string) {
        toast.success(message,
            {
                position: "bottom-right",
                icon: false,
                theme: "colored",
            }
        );
    }
    
    info(message: string) {
        toast.info(message,
            {
                position: "bottom-right",
                icon: false,
                theme: "colored",
            }
        );
    }

    error(message: string) {
        toast.error(message,
            {
                position: "bottom-right",
                icon: false,
                theme: "colored",
            }
        );
    }

  
    async promise<T>(promise: Promise<T>, pendingMessage: string, successMessage: string, errorMessage: string) {
        toast.promise(promise,
            {
                pending: pendingMessage,
                success: successMessage,
                error: errorMessage
            },
            {
                position: "bottom-right",
                icon: false,
                theme: "colored",
            }
        );
    }

}

export default new toastService();