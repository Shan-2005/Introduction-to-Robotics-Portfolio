export interface Assignment {
    id: string;
    title: string;
    videoUrl: string;
    description: string;
    inference: string;
    technicalSpecs?: string[];
}

export const assignments: Assignment[] = [
    {
        id: "1",
        title: "Robotic Surgery ARM",
        videoUrl: "/videos/How Robotic Surgery Works - Nucleus Medical Media (360p, h264).mp4",
        description: "Robotic Surgery ARM",
        inference: "MEDICAL ANIMATION TRANSCRIPT: Robotic surgery is a minimally invasive operation performed by surgeons manipulating robotic arms through several tiny incisions called ports. A robotic surgical machine consists of several main components including the console, where the surgeon sits while performing the operation, the patient-side cart with four interactive robotic arms and attached surgical instruments, and a high-definition 3D vision system. This system allows surgeons to make precise, controlled movements in your body with increased vision and dexterity. During robotic surgery, your surgeon will insert a high-definition 3D camera through one of the ports. The camera provides a magnified view of the surgical area. Then your surgeon will insert specialized surgical tools held by the remaining robotic arms through the other ports. Seated at the computer console, your surgeon will view the surgical area through a viewfinder and move the surgical tools and camera with joystick-like controls and foot pedals. Your surgeon's motions will generate computer input to guide the motion of the robot arms and surgical tools. Advantages of the system include controlled accurate movement of the surgical tools, prevention of unintentional hand shake or tremor, ability to operate in space is smaller than a human hand, enhanced visibility of the surgical area, and less patient blood loss and scarring."
    },
    {
        id: "2",
        title: "Articulated Robotic Arm",
        videoUrl: "https://youtu.be/ELXCMJeLpXc",
        description: "Robot with Gripper – Overview\n\nThis robot is an articulated robotic arm designed to pick, hold, and move objects using a gripper.\n\nUse Case\nIdeal for educational labs, demonstrations, and light automation tasks where accurate and repeatable object manipulation is required.",
        inference: "The robot uses rotational (revolute) joints to move its arm smoothly in different directions. Each joint adds one degree of freedom, allowing flexible and precise motion. A parallel-jaw gripper is attached at the end to grasp and release objects. The gripper provides controlled linear motion for secure handling. Higher degrees of freedom allow better positioning and orientation of objects.",
        technicalSpecs: [
            "Robot Type: Articulated robotic arm",
            "Degrees of Freedom: 5–6 DOF (including gripper)",
            "Joint Types: Revolute joints (arm), linear motion (gripper)",
            "End-Effector: Parallel-jaw gripper",
            "Actuation: Servo or stepper motors",
            "Functions: Pick and place, object handling, basic assembly tasks"
        ]
    }
];
