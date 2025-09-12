import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar";
import { Card,CardContent,CardTitle,CardHeader } from "@/components/ui/card";
export default function About(){
    return(
        <div className="top-16 grid grid-cols-2">
            <div className="flex flex-col item-center">
                <Card className="max-w h-screen rounded-none">
                    <CardHeader>
                        <CardTitle className="text-center text-6xl">About</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700 text-3xl">
                        <p>I am a lifelong learner with a passion in IT & Eastern sciences(Vedic astrology).</p>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col">
                <Avatar className="h-screen w-full rounded-none">
                    <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQEC4dn_HcmJZg/profile-displayphoto-shrink_400_400/B56ZTceLvsHoAg-/0/1738865689672?e=1760572800&v=beta&t=rpRa0JvNsi3jh-_JMw8sIrUTXaTAQaAxeRAgb9CDN1I" alt="Profile" />
                    <AvatarFallback>AK</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}