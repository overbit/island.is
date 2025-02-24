import {
  GetScheduleDistributionInput,
  PaymentScheduleConditions,
  PaymentScheduleDistribution,
} from '@island.is/api/schema'
import { ExternalData } from '@island.is/application/core'
import { useCallback, useEffect, useState } from 'react'
import { useLazyDistribution } from '../hooks/useLazyDistribution'
import { PaymentDistribution, PaymentPlanExternalData } from '../types'

export const prerequisitesFailed = (data: ExternalData) => {
  const prerequisites = (data as PaymentPlanExternalData)
    .paymentPlanPrerequisites?.data?.conditions as
    | PaymentScheduleConditions
    | undefined

  if (!prerequisites) return true

  return (
    prerequisites.maxDebt ||
    !prerequisites.taxReturns ||
    !prerequisites.vatReturns ||
    !prerequisites.citReturns ||
    !prerequisites.accommodationTaxReturns ||
    !prerequisites.withholdingTaxReturns ||
    !prerequisites.wageReturns
  )
}

export const formatIsk = (value: number): string =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' kr.'

export const useDistributionTable = ({
  monthAmount,
  monthCount,
  totalAmount,
  scheduleType,
}: PaymentDistribution) => {
  const getDistribution = useLazyDistribution()

  const [isLoading, setIsLoading] = useState(false)
  const [
    distributionData,
    setDistributionData,
  ] = useState<PaymentScheduleDistribution | null>(null)

  const getDistributionCallback = useCallback(
    async ({
      monthAmount = null,
      monthCount = null,
      totalAmount,
      scheduleType,
    }: GetScheduleDistributionInput) => {
      const { data } = await getDistribution({
        input: {
          monthAmount,
          monthCount,
          totalAmount,
          scheduleType,
        },
      })

      return data
    },
    [getDistribution],
  )

  useEffect(() => {
    setIsLoading(true)
    getDistributionCallback({
      monthAmount,
      monthCount,
      totalAmount,
      scheduleType,
    })
      .then((response) => {
        setDistributionData(response?.paymentScheduleDistribution || null)
      })
      .catch((error) => {
        console.error('An error occured fetching payment distribution: ', error)
      })
    setIsLoading(false)
  }, [
    getDistributionCallback,
    monthAmount,
    monthCount,
    totalAmount,
    scheduleType,
  ])

  return {
    isLoading,
    distributionData,
  }
}
