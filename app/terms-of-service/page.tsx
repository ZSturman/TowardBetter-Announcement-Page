"use client"
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsAndConditions() {
  return (
    <div className='w-screen h-screen bg-samGreyLight'>
    <div className="container mx-auto px-4 py-8 max-w-4xl font-samSchibsted">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4 bg-samBlush">
        <ol className="list-decimal list-inside space-y-6">
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Introduction</h2>
            <p className="mt-2">
              Welcome to Sam. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. By
              accessing or using Sam, you agree to comply with and be bound by these Terms. If you do not agree with any
              part of these Terms, you must not use our website or services.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Services</h2>
            <p className="mt-2">
              Sam provides a platform for personalized coaching and advisory services. Our services include access to
              professional coaches and advisors, concierge services, and community support through our mobile app.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">User Responsibilities</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree to provide accurate and complete information when registering for and using our services.</li>
              <li>
                You are responsible for maintaining the confidentiality of your account information and for all activities
                that occur under your account.
              </li>
            </ul>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Payment and Subscription</h2>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>Sam offers various subscription plans. By subscribing, you agree to pay the subscription fees associated with your chosen plan.</li>
              <li>Subscription fees are billed in advance and are non-refundable, except as provided in our refund policy.</li>
              <li>We reserve the right to change our subscription plans and pricing at any time. Any changes will be effective upon your next subscription renewal.</li>
            </ul>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Cancellation and Refunds</h2>
            <p className="mt-2">
              You may cancel your subscription at any time, but no refunds will be provided for any remaining subscription
              period. To cancel your subscription, please follow the instructions provided in your account settings.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Intellectual Property</h2>
            <p className="mt-2">
              All content, trademarks, logos, and other intellectual property on our website and app are owned by Sam or
              our licensors. You may not use, reproduce, or distribute any content from our website or app without our
              express written permission.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Aggregator Role and 1099 Professionals</h2>
            <p className="mt-2">
              Sam acts as an aggregator, providing a platform that connects users with independent contractors (1099
              professionals). Sam cannot guarantee the performance, results, or outcomes of the services provided by these
              1099 professionals. Users acknowledge and agree that Sam is not responsible for the actions, omissions, or
              conduct of any 1099 professionals contracted through our platform.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Limitation of Liability</h2>
            <p className="mt-2">
              Sam provides our services on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee that our services will
              be uninterrupted or error-free. To the maximum extent permitted by law, Sam will not be liable for any
              direct, indirect, incidental, or consequential damages arising out of or in connection with your use of our
              services.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Hold Harmless</h2>
            <p className="mt-2">
              You agree to hold harmless, defend, and indemnify Sam, its affiliates, officers, directors, employees, and
              agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation
              reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of
              our services or your violation of these Terms.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Privacy Policy</h2>
            <p className="mt-2">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to
              understand our practices regarding your personal data.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Changes to Terms</h2>
            <p className="mt-2">
              We may update these Terms from time to time. Any changes will be posted on our website, and your continued
              use of our services constitutes acceptance of the revised Terms.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Governing Law</h2>
            <p className="mt-2">
              These Terms are governed by and construed in accordance with the laws of Washington, DC. Any disputes
              arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts
              of Washington, DC.
            </p>
          </li>
          <li>
            <h2 className="text-xl font-semibold mb-2 inline-block">Contact Us</h2>
              <p className="mt-2">If you have any questions or concerns about these Terms, please contact us at hello [at] example.com (demo).</p>
          </li>
        </ol>
      </ScrollArea>
    </div>
    </div>
  )
}