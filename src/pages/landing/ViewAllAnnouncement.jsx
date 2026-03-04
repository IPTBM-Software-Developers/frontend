import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";

// Icons
import { Search, ArrowRight, Bell, Calendar, Trophy, BrushCleaning, Handshake, Rss, Newspaper, ArrowLeft } from "lucide-react";

const announcementData = [
  {
    Icon: <Calendar />,
    label: "Event",
    date: "March 15, 2026",
    bgColor: "bg-blue-500",
    labelColor: "bg-blue-500/10",
    labelTextColor: "text-blue-500",
    title: "Blockchain Security",
    desc: "Immutable records and tamper-proof documentation for your intellectual property assets using distributed ledger technology.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Trophy />,
    label: "Achievement",
    date: "February 10, 2026",
    bgColor: "bg-emerald-500",
    labelColor: "bg-emerald-500/10",
    labelTextColor: "text-emerald-500",
    title: "AI-Powered Analysis",
    desc: "Advanced machine learning algorithms to analyze, categorize, and monitor your IP portfolio for potential infringements.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "February 01, 2026",
    bgColor: "bg-amber-500",
    labelColor: "bg-amber-500/10",
    labelTextColor: "text-amber-500",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud-based platform ensuring your data is accessible anywhere while maintaining enterprise-grade security.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "January 20, 2026",
    bgColor: "bg-indigo-500",
    labelColor: "bg-indigo-500/10",
    labelTextColor: "text-indigo-500",
    title: "Secure Data Storage",
    desc: "End-to-end encrypted storage solutions with redundant backups and compliance with international data protection standards.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "January 05, 2026",
    bgColor: "bg-cyan-500",
    labelColor: "bg-cyan-500/10",
    labelTextColor: "text-cyan-500",
    title: "Real-Time Monitoring",
    desc: "Continuous monitoring of your IP assets with instant alerts for potential violations or unauthorized usage worldwide.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 15, 2025",
    bgColor: "bg-slate-500",
    labelColor: "bg-slate-500/10",
    labelTextColor: "text-slate-500",
    title: "API Integration",
    desc: "Seamless integration with existing systems through our robust API, enabling automated workflows and data synchronization.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Newspaper />,
    label: "News",
    date: "December 01, 2025",
    bgColor: "bg-slate-500",
    labelColor: "bg-slate-500/10",
    labelTextColor: "text-slate-500",
    title: "Smart Contract Automation",
    desc: "Self-executing digital agreements that streamline licensing royalties and automate ownership transfers without intermediaries.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Handshake />,
    label: "Partnership",
    date: "November 18, 2025",
    bgColor: "bg-indigo-500",
    labelColor: "bg-indigo-500/10",
    labelTextColor: "text-indigo-500",
    title: "Biometric Authentication",
    desc: "Multi-factor security layers including facial and fingerprint recognition to ensure only authorized personnel access sensitive IP.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "November 05, 2025",
    bgColor: "bg-amber-500",
    labelColor: "bg-amber-500/10",
    labelTextColor: "text-amber-500",
    title: "Global Compliance Tracking",
    desc: "Automated updates on international patent laws and regulatory changes to keep your portfolio compliant across all jurisdictions.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 22, 2025",
    bgColor: "bg-blue-500",
    labelColor: "bg-blue-500/10",
    labelTextColor: "text-blue-500",
    title: "Predictive Analytics",
    desc: "Forecasting market trends and potential IP valuation shifts using historical data and competitive landscape modeling.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Calendar />,
    label: "Event",
    date: "October 10, 2025",
    bgColor: "bg-blue-500",
    labelColor: "bg-blue-500/10",
    labelTextColor: "text-blue-500",
    title: "Quantum-Resistant Encryption",
    desc: "Future-proofing your data security with advanced cryptographic protocols designed to withstand next-generation computing threats.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <BrushCleaning />,
    label: "Maintenance",
    date: "September 28, 2025",
    bgColor: "bg-amber-500",
    labelColor: "bg-amber-500/10",
    labelTextColor: "text-amber-500",
    title: "Collaborative Workspaces",
    desc: "Centralized environments for legal teams and creators to review, annotate, and co-author IP documentation in real-time.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 15, 2025",
    bgColor: "bg-cyan-500",
    labelColor: "bg-cyan-500/10",
    labelTextColor: "text-cyan-500",
    title: "Mobile Management Suite",
    desc: "Comprehensive mobile application allowing you to manage filings, approve licenses, and track IP status on the go.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
  {
    Icon: <Rss />,
    label: "Update",
    date: "September 01, 2025",
    bgColor: "bg-cyan-500",
    labelColor: "bg-cyan-500/10",
    labelTextColor: "text-cyan-500",
    title: "Automated Reporting",
    desc: "Customizable reporting tools that generate detailed PDF or Excel summaries of your portfolio's performance and health.",
    parag: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Nulla molestie mattis scelerisque maximus eget fermentum odio. Ligula congue sollicitudin erat viverra ac tincidunt nam. Dui felis venenatis ultrices proin libero feugiat tristique. Sem placerat in id cursus mi pretium tellus. Taciti sociosqu ad litora torquent per conubia nostra. Mauris pharetra vestibulum fusce dictum risus blandit quis. Justo lectus commodo augue arcu dignissim velit aliquam. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Sed diam urna tempor pulvinar vivamus fringilla lacus. Et magnis dis parturient montes nascetur ridiculus mus. Ante condimentum neque at luctus nibh finibus facilisis. Rutrum gravida cras eleifend turpis fames primis vulputate. Dolor sit amet consectetur adipiscing elit quisque faucibus. Nisl malesuada lacinia integer nunc posuere ut hendrerit. Mattis scelerisque maximus eget fermentum odio phasellus non. Sollicitudin erat viverra ac tincidunt nam porta elementum. Venenatis ultrices proin libero feugiat tristique accumsan maecenas. In id cursus mi pretium tellus duis convallis. Ad litora torquent per conubia nostra inceptos himenaeos. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Commodo augue arcu dignissim velit aliquam imperdiet mollis. Suscipit auctor curabitur facilisi cubilia curae hac habitasse. Urna tempor pulvinar vivamus fringilla lacus nec metus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Neque at luctus nibh finibus facilisis dapibus etiam. Cras eleifend turpis fames primis vulputate ornare sagittis. Amet consectetur adipiscing elit quisque faucibus ex sapien. Lacinia integer nunc posuere ut hendrerit semper vel. Maximus eget fermentum odio phasellus non purus est. Viverra ac tincidunt nam porta elementum a enim. Proin libero feugiat tristique accumsan maecenas potenti ultricies. Cursus mi pretium tellus duis convallis tempus leo. Torquent per conubia nostra inceptos himenaeos orci varius. Dictum risus blandit quis suspendisse aliquet nisi sodales. Arcu dignissim velit aliquam imperdiet mollis nullam volutpat. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Montes nascetur ridiculus mus donec rhoncus eros lobortis.",
  },
];

const buttonLabel = [
  "All", 
  "Event", 
  "Achievement", 
  "Maintenance", 
  "Partnership", 
  "Update", 
  "News",
];


const ViewAllAnnouncement = () => {

  // State for Search Input
  const [searchQuery, setSearchQuery] = useState("");

  // State for Selected Category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State for ViewAllAnnouncement
  const [dataVisible, setDataVisible] = useState(null);

  // Function for View All Announcement
  const viewAll = (index) => {
    if (dataVisible === index) {
      setDataVisible(null);
    } else {
      setDataVisible(index);
    }
  }

  // Function to capture the event object
  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtered Data
  const filteredData = announcementData.filter((item) => {  
    // For Search Filtering
    const query = searchQuery.toLowerCase();
    const dataTitle = item.title.toLowerCase().includes(query);
    const dataDescription = item.desc.toLowerCase().includes(query);

    const searchData = dataTitle || dataDescription; // The Title or Description must Match the User's Input.

    // Category Filtering
    const category = item.label;
    const categoryData = selectedCategory === "All" || selectedCategory === category; //The Selected Category must be "All" or Labels in selectedCategory.

    return searchData && categoryData; // The User's Search Input and and Filter Button Must be the Same to filter data. 
  });

  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentCards = filteredData.slice(startIndex, startIndex + itemsPerPage);
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // To scroll up when visits to page and has a change in the page.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [currentPage]);

  return(
    <>
      <NavBar />
      <main className="w-full min-h-screen py-8 bg-gray-50 flex flex-col items-center gap-4">

        {/* Header */}
        <header className="w-[90%] xl:w-[80%] flex flex-col items-center gap-4 overflow-hidden">
          {/* Details */}
          <div className="flex gap-2 items-center">
            <span className="p-2 rounded-lg bg-blue-100">
              <Bell className="text-blue-700"/>
            </span>
            <span className="w-fit h-fit bg-gray-200 px-2 py-1 rounded-lg text-xs font-medium">
              Latest Update
            </span>
          </div>

          <h1 className="text-black font-bold text-4xl break-words text-center">
            Announcement
          </h1>

          <p className="text-gray-500 max-w-2xl leading-relaxed break-words text-center"> 
            Stay informed with the latest news, events, and updates from IPTBM. Browse all announcements and never miss an important update.
          </p>

          {/* Search Bar */}
          <div className="flex items-center w-full border border-gray-300 p-4 gap-2 rounded-lg focus-within:border-blue-500">
            <Search className="w-5 h-5 text-gray-500"/>
            <input 
            type="search" 
            placeholder="Search announcements..."
            className="w-full focus:outline-none text-sm"
            onChange={handleSearchQuery}/>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 w-full justify-start">
            {buttonLabel.map((items) => (
              <button 
                key={items}
                onClick={() => setSelectedCategory(items)}
                className={`px-4 py-2 border rounded-4xl transition-all cursor-pointer ${
                  selectedCategory === items 
                    ? "bg-blue-700 text-white border-blue-700" // Active Styles
                    : "border-gray-300 text-gray-500 hover:border-blue-700 hover:text-blue-700" // Inactive Styles
                }`}
              >
                {items}
              </button>
            ))}
          </div>
         </header> 

        {/* Pagination Content */}
        <section className="w-[90%] xl:w-[80%] flex flex-col gap-4">

          {/* Contents */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCards.map((items, index) => (
              <article 
              key={index} 
              className="rounded-xl cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all gap-4 flex flex-col shadow-sm"
              onClick={() => viewAll(index)}>
                <section className={`flex flex-col justify-center items-center w-full h-20 rounded-t-xl p-8 min-h-30 ${items.bgColor}`}>
                  <div className="w-full flex justify-between items-center h-fit">
                    <span className="text-white [&_svg]:w-10 [&_svg]:h-10 rounded-4xl mix-blend-screen">
                      {items.Icon}
                    </span>

                    <span className="text-sm text-white font-bold">
                      {items.date}
                    </span>
                  </div>
                </section>

                {/* Text */}
                <section className="flex flex-col w-full p-6 gap-2">
                  <span className={`${items.labelColor} ${items.labelTextColor} w-fit px-4 py-1 rounded-3xl text-sm font-medium`}>
                    {items.label}
                  </span>
                  <span className="font-semibold">
                    {items.title}
                  </span>

                  <span className="text-gray-600">
                    {items.desc}
                    ..
                  </span>
                </section>

                {/* Link */}
                <button
                className="flex items-center gap-2 p-4 text-blue-700 text-sm hover:underline w-fit cursor-pointer"
                onClick={() => viewAll(index)}>
                  {dataVisible === index ? "Read Less" : "Read More"} <ArrowRight className="h-4 w-4"/>
                </button>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage(p => p - 1)}
              disabled={currentPage === 1}
              className="px-5 py-3 text-sm border rounded-lg hover:bg-black/5 font-semibold cursor-pointer"
            >
              Prev
            </button>

            {/* Numbers */}
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-5 py-3 text-sm border rounded-lg hover:border-blue-500 font-semibold cursor-pointer ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage(p => p + 1)}
              disabled={currentPage === totalPages}
              className="px-5 py-3 text-sm border rounded-lg hover:bg-black/5 font-semibold cursor-pointer"
            >
              Next
            </button>

          </div>
        </section>
      </main>

      {/* View All Announcement Pop Up */}
      {dataVisible !== null && 
        <section 
        className="fixed flex justify-center items-center w-full h-screen inset-0 z-[9999] bg-black/20 backdrop-blur-xs px-4 cursor-pointer"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setDataVisible(null);
            console.log(e)
          }
        }}>
          {currentCards[dataVisible] && (
            <div className="flex flex-col w-4xl h-[80%] ">
              <header className={`flex flex-col w-full p-6 md:p-12 gap-4 rounded-t-lg ${currentCards[dataVisible].bgColor}`}  >
                <div className="flex justify-between items-center w-full text-sm md:text-base text-white font-semibold">
                  <span className="px-4 py-1 bg-white/30 rounded-2xl backdrop-blur-md">
                    {currentCards[dataVisible].label}
                  </span>
                  <span>
                    {currentCards[dataVisible].date}
                  </span>
                </div>

                <span className="text-white text-3xl lg:text-4xl font-bold">
                  {currentCards[dataVisible].title}
                </span>
              </header>

              <footer className="flex flex-col bg-white p-6 md:p-12 gap-8 rounded-b-lg overflow-y-auto">
                <h1 className="font-bold text-lg">
                  Overview
                </h1>

                <span className="text-gray-500">
                  {currentCards[dataVisible].desc}
                </span>

                <span className="break-normal text-gray-500">
                  {currentCards[dataVisible].parag}
                </span>

                <button
                  className="flex gap-2 items-center w-fit cursor-pointer text-sm text-red-500 bg-red-50 hover:bg-red-100 active:bg-red-200 pl-4 pr-5 py-2 rounded-4xl transition-all"
                  onClick={() => viewAll(dataVisible)}
                >
                  <ArrowLeft className="h-5 w-5"/>
                  Back to Announcement
                </button>
                
              </footer>
            </div>
          )}
        </section>
      }

      <Footer />
    </>
  );
};

export default ViewAllAnnouncement;