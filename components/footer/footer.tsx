import type React from "react";
import { FooterAccordion } from "./footer-accordion";

interface FooterLinkProps {
  children: React.ReactNode;
}

function FooterLink({ children }: FooterLinkProps) {
  return (
    <li className="mb-2">
      <div className="text-gray-600 hover:text-black hover:underline cursor-pointer transition-colors">
        {children}
      </div>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#E6E6E6] border-t">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterAccordion title="Customer Service">
            <ul className="space-y-2">
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Orders & Shipping</FooterLink>
              <FooterLink>Returns & Refunds</FooterLink>
              <FooterLink>FAQs</FooterLink>
              <FooterLink>Size Guide</FooterLink>
            </ul>
          </FooterAccordion>

          {/* About FARFETCH */}
          <FooterAccordion title="About FARFETCH">
            <ul className="space-y-2">
              <FooterLink >About Us</FooterLink>
              <FooterLink >Investors</FooterLink>
              <FooterLink >Careers</FooterLink>
              <FooterLink >Press</FooterLink>
              <FooterLink >Sustainability</FooterLink>
              <FooterLink >Affiliates</FooterLink>
            </ul>
          </FooterAccordion>

          {/* Discounts and Membership */}
          <FooterAccordion title="Discounts and Membership">
            <ul className="space-y-2">
              <FooterLink>Loyalty Program</FooterLink>
              <FooterLink>Refer a Friend</FooterLink>
              <FooterLink>Student Discount</FooterLink>
              <FooterLink>Current Promotions</FooterLink>
              <FooterLink>Download the App</FooterLink>
            </ul>
          </FooterAccordion>
        </div>

        {/* Bottom Footer */}
        <div className="md:mt-12 pt-6 md:border-t border-gray-400">
          <div className="flex flex-col">
            <div className="mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
                <li>
                  <div className="hover:underline cursor-pointer">
                    Privacy Policy
                  </div>
                </li>
                <li>
                  <div className="hover:underline cursor-pointer">
                    Terms and Conditions
                  </div>
                </li>
                <li>
                  <div className="hover:underline cursor-pointer">
                    Accessibility
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-sm text-gray-500">
              <p className="mb-1">
                FARFETCH and the FARFETCH logo are trade marks of FARFETCH UK
                Limited and are registered in numerous jurisdictions around the
                world.
              </p>
              <p>© Copyright 2025 FARFETCH UK Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
